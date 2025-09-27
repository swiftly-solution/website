---
title: PluginClassName
---

```csharp
public class PluginClassName : BasePlugin, IPlugin
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

**PluginClassName(ISwiftlyCore)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/src/SwiftlyS2.Plugin.cs#L8)

```csharp
public PluginClassName(ISwiftlyCore core)
```

#### Parameters

- **core**: [ISwiftlyCore](/docs/api/shared/iswiftlycore)

## Methods

**ConfigureSharedServices(IServiceCollection)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/src/SwiftlyS2.Plugin.cs#L12)

```csharp
public override void ConfigureSharedServices(IServiceCollection sharedServices)
```

#### Parameters

- **sharedServices**: [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

**InitializeCommands()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/Commands.example.cs#L10)

```csharp
public void InitializeCommands()
```

**InitializeEvents()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/Events.example.cs#L10)

```csharp
public void InitializeEvents()
```

**InitializeGameEvents()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/GameEvents.example.cs#L12)

```csharp
public void InitializeGameEvents()
```

**InitializeNetMessage()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/NetMessage.example.cs#L11)

```csharp
public void InitializeNetMessage()
```

**InitializeSoundEvent()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/SoundEvent.example.cs#L10)

```csharp
public void InitializeSoundEvent()
```

**InitializeUnmanagedFunctions()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/HookAndCallNativeFunctions.example.cs#L15)

```csharp
public void InitializeUnmanagedFunctions()
```

**Load()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/src/SwiftlyS2.Plugin.cs#L18)

```csharp
public override void Load()
```

**TestCommand(ICommandContext)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/Commands.example.cs#L18)

```csharp
[Command("test", false)]
public void TestCommand(ICommandContext context)
```

#### Parameters

- **context**: [ICommandContext](/docs/api/shared/commands/icommandcontext)

**TestServerNetMessageHandler(EventPlayerJump)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/GameEvents.example.cs#L32)

```csharp
[GameEventHandler(HookMode.Pre)]
public HookResult TestServerNetMessageHandler(EventPlayerJump @event)
```

#### Parameters

- **event**: [EventPlayerJump](/docs/api/shared/gameeventdefinitions/eventplayerjump)

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult)

**TestServerNetMessageHandler(CMsgSosStartSoundEvent)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/examples/NetMessage.example.cs#L43)

```csharp
[ServerNetMessageHandler]
public HookResult TestServerNetMessageHandler(CMsgSosStartSoundEvent msg)
```

#### Parameters

- **msg**: [CMsgSosStartSoundEvent](/docs/api/shared/protobufdefinitions/cmsgsosstartsoundevent)

#### Returns

- [HookResult](/docs/api/shared/misc/hookresult)

**Unload()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/src/SwiftlyS2.Plugin.cs#L22)

```csharp
public override void Unload()
```

**UseSharedServices(IServiceProvider)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/SwiftlyS2.PluginTemplate/src/SwiftlyS2.Plugin.cs#L15)

```csharp
public override void UseSharedServices(IServiceProvider sharedProvider)
```

#### Parameters

- **sharedProvider**: [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

