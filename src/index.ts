#!/usr/bin/env node
import fs from 'fs';
import yaml, { load } from 'js-yaml';

export const loadConfig = async () => {
  try {
    let fileContents = await fs.readFileSync('./config.yaml', 'utf8');
    let data = await yaml.load(fileContents);

    return data;
  } catch (e) {
    console.log(e);
  }
};

loadConfig().then((data) => {
  console.log(data);
})
