---
title: IPlugin
---

```csharp
public interface IPlugin
```

## Methods

**ConfigureSharedServices(IServiceCollection)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L7)

```csharp
void ConfigureSharedServices(IServiceCollection sharedServices)
```

#### Parameters

- **sharedServices**: [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

**Load()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L11)

```csharp
void Load()
```

**Unload()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L13)

```csharp
void Unload()
```

**UseSharedServices(IServiceProvider)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L9)

```csharp
void UseSharedServices(IServiceProvider sharedProvider)
```

#### Parameters

- **sharedProvider**: [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

