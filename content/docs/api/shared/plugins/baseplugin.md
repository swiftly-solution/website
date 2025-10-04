---
title: BasePlugin
---

```csharp
public abstract class BasePlugin : IPlugin
```

#### Inheritance

#### Derived

#### Implements

#### Inherited Members

## Constructors

**BasePlugin(ISwiftlyCore)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L10)

```csharp
public BasePlugin(ISwiftlyCore core)
```

#### Parameters

- **core**: [ISwiftlyCore](/docs/api/shared/iswiftlycore)

## Properties

**Core** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L8)

```csharp
protected ISwiftlyCore Core { get; }
```

#### Property Value

- [ISwiftlyCore](/docs/api/shared/iswiftlycore)

## Methods

**ConfigureSharedServices(IServiceCollection)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L26)

```csharp
public virtual void ConfigureSharedServices(IServiceCollection sharedServices)
```

#### Parameters

- **sharedServices**: [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

**Load(bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L30)

```csharp
public abstract void Load(bool hotReload)
```

#### Parameters

- **hotReload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Unload()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L32)

```csharp
public abstract void Unload()
```

**UseSharedServices(IServiceProvider)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L28)

```csharp
public virtual void UseSharedServices(IServiceProvider sharedProvider)
```

#### Parameters

- **sharedProvider**: [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

