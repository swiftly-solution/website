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

### BasePlugin(ISwiftlyCore)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L12)

```csharp
public BasePlugin(ISwiftlyCore core)
```

#### Parameters

- **core**: [ISwiftlyCore](/docs/api/shared/iswiftlycore)

## Properties

### Core

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L10)

```csharp
protected ISwiftlyCore Core { get; }
```

#### Property Value

- [ISwiftlyCore](/docs/api/shared/iswiftlycore)

## Methods

### ConfigureSharedInterface(IInterfaceManager)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L32)

```csharp
public virtual void ConfigureSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/shared/iinterfacemanager)

### Load(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L36)

```csharp
public abstract void Load(bool hotReload)
```

#### Parameters

- **hotReload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Unload()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L38)

```csharp
public abstract void Unload()
```

### UseSharedInterface(IInterfaceManager)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L34)

```csharp
public virtual void UseSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/shared/iinterfacemanager)

