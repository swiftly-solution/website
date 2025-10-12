---
title: IPluginConfigurationService
---

```csharp
public interface IPluginConfigurationService
```

## Properties

### BasePath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L11)

```csharp
string BasePath { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BasePathExists

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L53)

```csharp
bool BasePathExists { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Manager

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L48)

```csharp
IConfigurationManager Manager { get; }
```

#### Property Value

- [IConfigurationManager](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationmanager)

## Methods

### Configure(Action)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L42)

```csharp
IPluginConfigurationService Configure(Action<IConfigurationBuilder> configure)
```

#### Parameters

- **configure**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IConfigurationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationbuilder)> - The action to configure the configuration manager.

#### Returns

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice) - The plugin configuration service.

### GetConfigPath(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L19)

```csharp
string GetConfigPath(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file, including the extension.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the configuration file.

### InitializeJsonWithModel(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L35)

```csharp
IPluginConfigurationService InitializeJsonWithModel<T>(string name, string sectionName) where T : class, new()
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file.
- **sectionName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the section in the configuration file.

#### Returns

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice)

#### Type Parameters

- **T**:  - The type of the configuration model.

### InitializeWithTemplate(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L27)

```csharp
IPluginConfigurationService InitializeWithTemplate(string name, string templateName)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file.
- **templateName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the template file.

#### Returns

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice)

