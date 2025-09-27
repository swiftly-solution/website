---
title: IPluginConfigurationService
---

```csharp
public interface IPluginConfigurationService
```

## Properties

**Root** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L46)

```csharp
IConfigurationRoot Root { get; }
```

#### Property Value

- [IConfigurationRoot](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationroot)

## Methods

**Configure(Action<IConfigurationBuilder>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L41)

```csharp
IPluginConfigurationService Configure(Action<IConfigurationBuilder> configureBuilder)
```

#### Parameters

- **configureBuilder**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IConfigurationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationbuilder)> - The action to configure the configuration builder.

#### Returns

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice)

**CreateBuilder()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L34)

```csharp
IConfigurationBuilder CreateBuilder()
```

#### Returns

- [IConfigurationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationbuilder) - The configuration builder.

**GetConfigPath(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L13)

```csharp
string GetConfigPath(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The path to the configuration file.

**InitializeByTemplate(string, string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L21)

```csharp
IPluginConfigurationService InitializeByTemplate(string name, string templateName)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file.
- **templateName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the template file.

#### Returns

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice)

**InitializeJson<T>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Services/IPluginConfigurationService.cs#L28)

```csharp
IPluginConfigurationService InitializeJson<T>(string name) where T : class, new()
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the configuration file.

#### Returns

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice)

#### Type Parameters

- **T**:  - The type of the configuration model.

