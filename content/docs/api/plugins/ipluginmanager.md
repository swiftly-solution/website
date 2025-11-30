---
title: IPluginManager
---

# Interface IPluginManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L12)

**Namespace**: [SwiftlyS2.Shared.Plugins](/docs/api/plugins)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IPluginManager
```

## Methods

### GetAllPluginMetadata()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L61)

Gets a dictionary of all plugin metadata, keyed by plugin ID.

```csharp
Dictionary<string, PluginMetadata> GetAllPluginMetadata()
```

#### Returns

- [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [PluginMetadata](/docs/api/pluginmetadata)>

### GetAllPluginStatuses()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L57)

Gets a dictionary of all plugin statuses, keyed by plugin ID.

```csharp
Dictionary<string, PluginStatus> GetAllPluginStatuses()
```

#### Returns

- [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [PluginStatus](/docs/api/plugins/pluginstatus)>

### GetAllPlugins()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L65)

Gets a list of all plugin IDs.

```csharp
IEnumerable<string> GetAllPlugins()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### GetPluginMetadata(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L44)

Gets the metadata of the specified plugin.

```csharp
PluginMetadata? GetPluginMetadata(string pluginId)
```

#### Parameters

- **pluginId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the plugin.

#### Returns

- [PluginMetadata](/docs/api/pluginmetadata)?

### GetPluginPath(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L49)

Gets the path of the specified plugin.

```csharp
string? GetPluginPath(string pluginId)
```

#### Parameters

- **pluginId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the plugin.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)?

### GetPluginPaths()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L53)

Gets a dictionary of all plugin paths, keyed by plugin ID.

```csharp
Dictionary<string, string> GetPluginPaths()
```

#### Returns

- [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

### GetPluginStatus(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L39)

Gets the status of the specified plugin.

```csharp
PluginStatus? GetPluginStatus(string pluginId)
```

#### Parameters

- **pluginId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the plugin.

#### Returns

- [PluginStatus](/docs/api/plugins/pluginstatus)?

### LoadPlugin(string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L20)

Loads the specified plugin.

```csharp
bool LoadPlugin(string pluginId, bool silent = false)
```

#### Parameters

- **pluginId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the plugin.
- **silent**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, suppresses any error messages.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the plugin was loaded successfully, false otherwise.

### ReloadPlugin(string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L34)

Reloads the specified plugin.

```csharp
bool ReloadPlugin(string pluginId, bool silent = false)
```

#### Parameters

- **pluginId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the plugin.
- **silent**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, suppresses any error messages.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the plugin was reloaded successfully, false otherwise.

### UnloadPlugin(string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Plugins/IPluginManager.cs#L27)

Unloads the specified plugin.

```csharp
bool UnloadPlugin(string pluginId, bool silent = false)
```

#### Parameters

- **pluginId**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ID of the plugin.
- **silent**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - If true, suppresses any error messages.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the plugin was unloaded successfully, false otherwise.

