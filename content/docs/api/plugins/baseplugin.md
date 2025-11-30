---
title: BasePlugin
---

# Class BasePlugin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L8)

**Namespace**: [SwiftlyS2.Shared.Plugins](/docs/api/plugins)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public abstract class BasePlugin : IPlugin
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [BasePlugin](/docs/api/plugins/baseplugin)

#### Implements

- [IPlugin](/docs/api/plugins/iplugin)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### BasePlugin(ISwiftlyCore)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L13)

```csharp
public BasePlugin(ISwiftlyCore core)
```

#### Parameters

- **core**: [ISwiftlyCore](/docs/api/iswiftlycore)

## Properties

### Core

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L11)

```csharp
protected ISwiftlyCore Core { get; }
```

#### Property Value

- [ISwiftlyCore](/docs/api/iswiftlycore)

## Methods

### ConfigureSharedInterface(IInterfaceManager)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L33)

```csharp
public virtual void ConfigureSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/iinterfacemanager)

### Load(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L41)

```csharp
public abstract void Load(bool hotReload)
```

#### Parameters

- **hotReload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnAllPluginsLoaded()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L39)

```csharp
public virtual void OnAllPluginsLoaded()
```

### OnSharedInterfaceInjected(IInterfaceManager)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L37)

```csharp
public virtual void OnSharedInterfaceInjected(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/iinterfacemanager)

### Unload()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L43)

```csharp
public abstract void Unload()
```

### UseSharedInterface(IInterfaceManager)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/BasePlugin.cs#L35)

```csharp
public virtual void UseSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/iinterfacemanager)

