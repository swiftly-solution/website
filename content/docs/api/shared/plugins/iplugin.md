---
title: IPlugin
---

```csharp
public interface IPlugin
```

## Methods

### ConfigureSharedInterface(IInterfaceManager)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L8)

```csharp
void ConfigureSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/shared/iinterfacemanager)

### Load(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L16)

```csharp
void Load(bool hotReload)
```

#### Parameters

- **hotReload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnAllPluginsLoaded()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L14)

```csharp
void OnAllPluginsLoaded()
```

### OnSharedInterfaceInjected(IInterfaceManager)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L12)

```csharp
void OnSharedInterfaceInjected(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/shared/iinterfacemanager)

### Unload()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L18)

```csharp
void Unload()
```

### UseSharedInterface(IInterfaceManager)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L10)

```csharp
void UseSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/shared/iinterfacemanager)

