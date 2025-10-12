---
title: IPlugin
---

```csharp
public interface IPlugin
```

## Methods

### ConfigureSharedInterface(IInterfaceManager)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L7)

```csharp
void ConfigureSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/shared/iinterfacemanager)

### Load(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L11)

```csharp
void Load(bool hotReload)
```

#### Parameters

- **hotReload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Unload()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L13)

```csharp
void Unload()
```

### UseSharedInterface(IInterfaceManager)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Plugins/IPlugin.cs#L9)

```csharp
void UseSharedInterface(IInterfaceManager interfaceManager)
```

#### Parameters

- **interfaceManager**: [IInterfaceManager](/docs/api/shared/iinterfacemanager)

