---
title: IPlugin
---

# Interface IPlugin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Plugins](/docs/api/plugins)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IPlugin
```

## Methods

### ConfigureSharedInterface(IInterfaceManager)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L8)

```csharp
void ConfigureSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/iinterfacemanager)

### Load(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L16)

```csharp
void Load(bool hotReload)
```

#### Parameters

- **hotReload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnAllPluginsLoaded()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L14)

```csharp
void OnAllPluginsLoaded()
```

### OnSharedInterfaceInjected(IInterfaceManager)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L12)

```csharp
void OnSharedInterfaceInjected(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/iinterfacemanager)

### Unload()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L18)

```csharp
void Unload()
```

### UseSharedInterface(IInterfaceManager)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L10)

```csharp
void UseSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/iinterfacemanager)

