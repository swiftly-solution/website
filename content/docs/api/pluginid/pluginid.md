---
title: PluginId
---

```csharp
public class PluginId : BasePlugin, IPlugin
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

**PluginId(ISwiftlyCore)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/src/PluginId.cs#L9)

```csharp
public PluginId(ISwiftlyCore core)
```

#### Parameters

- **core**: [ISwiftlyCore](/docs/api/shared/iswiftlycore)

## Methods

**ConfigureSharedServices(IServiceCollection)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/src/PluginId.cs#L13)

```csharp
public override void ConfigureSharedServices(IServiceCollection sharedServices)
```

#### Parameters

- **sharedServices**: [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

**InitializeCommands()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/Commands.example.cs#L10)

```csharp
public void InitializeCommands()
```

**InitializeEvents()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/Events.example.cs#L10)

```csharp
public void InitializeEvents()
```

**InitializeGameEvents()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/GameEvents.example.cs#L12)

```csharp
public void InitializeGameEvents()
```

**InitializeNetMessage()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/NetMessage.example.cs#L11)

```csharp
public void InitializeNetMessage()
```

**InitializeSoundEvent()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/SoundEvent.example.cs#L10)

```csharp
public void InitializeSoundEvent()
```

**InitializeUnmanagedFunctions()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/HookAndCallNativeFunctions.example.cs#L15)

```csharp
public void InitializeUnmanagedFunctions()
```

**Load(bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/src/PluginId.cs#L19)

```csharp
public override void Load(bool hotReload)
```

#### Parameters

- **hotReload**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TestCommand(ICommandContext)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/Commands.example.cs#L18)

```csharp
[Command("test", false)]
public void TestCommand(ICommandContext context)
```

#### Parameters

- **context**: [ICommandContext](/docs/api/shared/commands/icommandcontext)

**TestServerNetMessageHandler(EventPlayerJump)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/GameEvents.example.cs#L32)

```csharp
[GameEventHandler(HookMode.Pre)]
public HookResult TestServerNetMessageHandler(EventPlayerJump @event)
```

#### Parameters

- **event**: [EventPlayerJump](/docs/api/shared/gameeventdefinitions/eventplayerjump)

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult)

**TestServerNetMessageHandler(CMsgSosStartSoundEvent)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/examples/NetMessage.example.cs#L43)

```csharp
[ServerNetMessageHandler]
public HookResult TestServerNetMessageHandler(CMsgSosStartSoundEvent msg)
```

#### Parameters

- **msg**: [CMsgSosStartSoundEvent](/docs/api/shared/protobufdefinitions/cmsgsosstartsoundevent)

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult)

**Unload()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/src/PluginId.cs#L23)

```csharp
public override void Unload()
```

**UseSharedServices(IServiceProvider)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/SwiftlyS2.PluginTemplate/templates/src/PluginId.cs#L16)

```csharp
public override void UseSharedServices(IServiceProvider sharedProvider)
```

#### Parameters

- **sharedProvider**: [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

