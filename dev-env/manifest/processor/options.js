import script from './lib/script'
import html from './lib/html'
import path from 'path'
import fs from 'fs'

export default function(manifest, {buildPath}) {
  const {options_ui} = manifest

  // Skip when there is no options_page property
  if(!options_ui.page)
    return

  const scripts = []

  let dirname = path.dirname(options_ui.page)

  // Process background scripts
  let scriptName = dirname + '/settings.js';
  scripts.push(scriptName)

  // Background page
  if(options_ui.page) {
    scripts.push(html(options_ui.page, buildPath))
  }

  return {manifest, scripts}
}
