---
title: IPluginConfigurationService
---

# Interface IPluginConfigurationService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Services](/docs/api/services)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IPluginConfigurationService
```

## Properties

### BasePath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L12)

Get the base path of plugin configuration.

```csharp
string BasePath { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BasePathExists

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L62)

Whether the base path exists in the file system.

```csharp
bool BasePathExists { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Manager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L57)

Get the configuration root.

```csharp
IConfigurationManager Manager { get; }
```

#### Property Value

- [IConfigurationManager](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationmanager)

## Methods

### Configure(Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L51)

Configure the internal configuration manager.

```csharp
IPluginConfigurationService Configure(Action<IConfigurationBuilder> configure)
```

#### Parameters

- **configure**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IConfigurationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationbuilder)> - The action to configure the configuration manager.

#### Returns

- [IPluginConfigurationService](/docs/api/services/ipluginconfigurationservice) - The plugin configuration service.

### GetConfigPath(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L20)

Get the path to the configuration file.

```csharp
string GetConfigPath(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file, including the extension.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the configuration file.

### InitializeJsonWithModel(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L36)

Initialize the json configuration file with a class as template.

```csharp
IPluginConfigurationService InitializeJsonWithModel<T>(string name, string sectionName) where T : class, new()
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file.
- **sectionName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the section in the configuration file.

#### Returns

- [IPluginConfigurationService](/docs/api/services/ipluginconfigurationservice)

#### Type Parameters

- **T**:  - The type of the configuration model.

### InitializeTomlWithModel(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L44)

Initialize the TOML configuration file with a class as template.

```csharp
IPluginConfigurationService InitializeTomlWithModel<T>(string name, string sectionName) where T : class, new()
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file.
- **sectionName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the section in the configuration file.

#### Returns

- [IPluginConfigurationService](/docs/api/services/ipluginconfigurationservice)

#### Type Parameters

- **T**:  - The type of the configuration model.

### InitializeWithTemplate(string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L28)

Initialize the configuration file with a template.
To use this, you must package a templates folder in the plugin, with the template file in it.

```csharp
IPluginConfigurationService InitializeWithTemplate(string name, string templateName)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file.
- **templateName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the template file.

#### Returns

- [IPluginConfigurationService](/docs/api/services/ipluginconfigurationservice)

