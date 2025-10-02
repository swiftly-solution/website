'use client';

import { CodeBlock, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Pre } from 'fumadocs-ui/components/codeblock';
import React, { useMemo, useState } from 'react';

interface DotnetTemplateGeneratorProps {
}

export const DotnetTemplateGenerator: React.FC<DotnetTemplateGeneratorProps> = ({
}) => {
  const [pluginId, setPluginId] = useState('TestPlugin');
  const [pluginClassName, setPluginClassName] = useState('TestPlugin');
  const [pluginAuthor, setPluginAuthor] = useState('Anonymous');
  const [pluginVersion, setPluginVersion] = useState('1.0.0');
  const [pluginDescription, setPluginDescription] = useState('');

  const command = useMemo(() => {
    const safePluginId = pluginId.trim();
    const safeClassName = pluginClassName.trim();
    const parts: string[] = [
      'dotnet',
      'new',
      'swplugin',
    ];

    if (safePluginId.length > 0) {
      parts.push('-n');
      parts.push(`"${safePluginId}"`);
      parts.push('--PluginId');
      parts.push(`"${safePluginId}"`);
    }
    if (safeClassName.length > 0) {
      parts.push('--PluginClassName');
      parts.push(`"${safeClassName}"`);
    }
    if (pluginAuthor.length > 0) {
      parts.push('--PluginAuthor');
      parts.push(`"${pluginAuthor}"`);
    }
    if (pluginVersion.length > 0) {
      parts.push('--PluginVersion');
      parts.push(`"${pluginVersion}"`);
    }
    if (pluginDescription.length > 0) {
      parts.push('--PluginDescription');
      parts.push(`"${pluginDescription}"`);
    }

    return parts.join(' ');
  }, [pluginId, pluginClassName, pluginAuthor, pluginVersion, pluginDescription]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
    }
  };

  return (
    <div className='flex flex-col gap-4 max-w-7xl bg-radial-[at_bottom] from-blue-500/30 p-13 border border-fd-border'>
      <div className="flex flex-col gap-4 max-w-7xl bg-fd-card 0 p-4 rounded-lg border border-fd-border">
        <div className="flex flex-col gap-2">
          <label htmlFor="plugin-id">Identifier of the plugin. Must be unique and can only contain letters, numbers, and underscores.</label>
          <input
            id="plugin-id"
            type="text"
            placeholder="TestPlugin"
            value={pluginId}
            onChange={(e) => setPluginId(e.target.value)}
            className="bg-fd-background text-fd-text p-3 border border-fd-border rounded-md outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="plugin-class">Main class name of the plugin.</label>
          <input
            id="plugin-class"
            type="text"
            placeholder="TestPlugin"
            value={pluginClassName}
            onChange={(e) => setPluginClassName(e.target.value)}
            className="bg-fd-background text-fd-text p-3 border border-fd-border rounded-md outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="plugin-author">Author of the plugin.</label>
          <input
            id="plugin-author"
            type="text"
            placeholder="Anonymous"
            value={pluginAuthor}
            onChange={(e) => setPluginAuthor(e.target.value)}
            className="bg-fd-background text-fd-text p-3 border border-fd-border rounded-md outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="plugin-version">Version of the plugin.</label>
          <input
            id="plugin-version"
            type="text"
            placeholder="1.0.0"
            value={pluginVersion}
            onChange={(e) => setPluginVersion(e.target.value)}
            className="bg-fd-background text-fd-text p-3 border border-fd-border rounded-md outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="plugin-description">Description of the plugin.</label>
          <textarea
            id="plugin-description"
            placeholder="Description of the plugin."
            value={pluginDescription}
            onChange={(e) => setPluginDescription(e.target.value)}
            className="bg-fd-background text-fd-text p-3 border border-fd-border rounded-md outline-none"
            rows={4}
          />
        </div>

        <div>
          <div className="font-bold mb-2">Generated command</div>
          <CodeBlock>
            <Pre className='px-4'>
              {command}
            </Pre>
          </CodeBlock>
        </div>
      </div>
    </div>
  );
};