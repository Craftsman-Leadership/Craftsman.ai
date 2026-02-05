const fs = require('fs');
const path = require('path');

// File paths
const GUIDES_DIR = path.join(__dirname, '..', '_guides');

// Convert title to slug format
function titleToSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Parse frontmatter and content from guide
function parseGuide(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!frontMatterMatch) {
    return null;
  }

  return {
    frontMatterText: frontMatterMatch[1],
    content: frontMatterMatch[2],
    fullContent: content
  };
}

// Extract series metadata from frontmatter
function extractSeries(frontMatterText) {
  const seriesMatch = frontMatterText.match(/series:\s*\n([\s\S]*?)(?=\n\w|$)/);
  if (!seriesMatch) {
    return null;
  }

  const seriesText = seriesMatch[1];
  const series = {};

  const nameMatch = seriesText.match(/name:\s*"([^"]+)"/);
  if (nameMatch) series.name = nameMatch[1];

  const partMatch = seriesText.match(/part:\s*(\d+)/);
  if (partMatch) series.part = parseInt(partMatch[1]);

  const totalMatch = seriesText.match(/total:\s*(\d+)/);
  if (totalMatch) series.total = parseInt(totalMatch[1]);

  const previousMatch = seriesText.match(/previous:\s*"([^"]+)"/);
  if (previousMatch) series.previous = previousMatch[1];

  const nextMatch = seriesText.match(/next:\s*"([^"]+)"/);
  if (nextMatch) series.next = nextMatch[1];

  return series;
}

// Check if a guide exists
function guideExists(slug, slugToFile) {
  return !!slugToFile[slug];
}

// Remove broken next/previous links from frontmatter
function fixBrokenLinks(frontMatterText, series, slugToFile) {
  let updated = frontMatterText;
  let changes = [];

  // Check if previous link is broken
  if (series.previous && !guideExists(series.previous, slugToFile)) {
    const previousLine = new RegExp(`\\s*previous:\\s*"${series.previous}"\\n`, 'g');
    updated = updated.replace(previousLine, '');
    changes.push(`Removed broken previous link: ${series.previous}`);
  }

  // Check if next link is broken
  if (series.next && !guideExists(series.next, slugToFile)) {
    const nextLine = new RegExp(`\\s*next:\\s*"${series.next}"\\n`, 'g');
    updated = updated.replace(nextLine, '');
    changes.push(`Removed broken next link: ${series.next}`);
  }

  return { updated, changes };
}

// Main function
function main() {
  console.log('🔧 Fixing Broken Series Links...\n');

  // Get all guide files
  const guideFiles = fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith('.md'));

  // Create a map of slug -> filename
  const slugToFile = {};
  guideFiles.forEach(filename => {
    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
    slugToFile[slug] = filename;
  });

  let fixed = 0;
  let checked = 0;
  let totalLinksRemoved = 0;

  // Process each guide
  guideFiles.forEach(filename => {
    const filePath = path.join(GUIDES_DIR, filename);
    const guideData = parseGuide(filePath);

    if (!guideData) {
      return;
    }

    const series = extractSeries(guideData.frontMatterText);
    if (!series) {
      return;
    }

    checked++;

    // Check and fix broken links
    const { updated, changes } = fixBrokenLinks(guideData.frontMatterText, series, slugToFile);

    if (changes.length > 0) {
      const updatedContent = `---\n${updated}\n---\n${guideData.content}`;
      fs.writeFileSync(filePath, updatedContent);

      console.log(`✅ Fixed: ${filename}`);
      changes.forEach(change => console.log(`   - ${change}`));
      fixed++;
      totalLinksRemoved += changes.length;
    }
  });

  console.log('\n📊 SUMMARY');
  console.log('═══════════════════════════════════════');
  console.log(`Checked: ${checked} guides with series`);
  console.log(`Fixed: ${fixed} guides`);
  console.log(`Broken links removed: ${totalLinksRemoved}`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main };
