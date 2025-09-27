---
title: ISwiftlyCore
---

```csharp
public interface ISwiftlyCore
```

## Properties

**Command** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L46)

```csharp
ICommandService Command { get; }
```

#### Property Value

- [ICommandService](/docs/api/shared/commands/icommandservice)

**ConVar** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L56)

```csharp
IConVarService ConVar { get; }
```

#### Property Value

- [IConVarService](/docs/api/shared/convars/iconvarservice)

**Configuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L61)

```csharp
IPluginConfigurationService Configuration { get; }
```

#### Property Value

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice)

**Database** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L107)

```csharp
IDatabaseService Database { get; }
```

#### Property Value

- [IDatabaseService](/docs/api/shared/database/idatabaseservice)

**Engine** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L31)

```csharp
IEngineService Engine { get; }
```

#### Property Value

- [IEngineService](/docs/api/shared/services/iengineservice)

**EntitySystem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L51)

```csharp
IEntitySystemService EntitySystem { get; }
```

#### Property Value

- [IEntitySystemService](/docs/api/shared/entitysystem/ientitysystemservice)

**Event** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L26)

```csharp
IEventSubscriber Event { get; }
```

#### Property Value

- [IEventSubscriber](/docs/api/shared/events/ieventsubscriber)

**GameData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L66)

```csharp
IGameDataService GameData { get; }
```

#### Property Value

- [IGameDataService](/docs/api/shared/services/igamedataservice)

**GameEvent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L36)

```csharp
IGameEventService GameEvent { get; }
```

#### Property Value

- [IGameEventService](/docs/api/shared/gameevents/igameeventservice)

**Localizer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L117)

```csharp
ILocalizer Localizer { get; }
```

#### Property Value

- [ILocalizer](/docs/api/shared/services/ilocalizer)

**Logger** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L87)

```csharp
ILogger Logger { get; }
```

#### Property Value

- [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

**LoggerFactory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L82)

```csharp
ILoggerFactory LoggerFactory { get; }
```

#### Property Value

- [ILoggerFactory](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.iloggerfactory)

**Memory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L77)

```csharp
IMemoryService Memory { get; }
```

#### Property Value

- [IMemoryService](/docs/api/shared/memory/imemoryservice)

**NetMessage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L41)

```csharp
INetMessageService NetMessage { get; }
```

#### Property Value

- [INetMessageService](/docs/api/shared/netmessages/inetmessageservice)

**PlayerManager** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L71)

```csharp
IPlayerManagerService PlayerManager { get; }
```

#### Property Value

- [IPlayerManagerService](/docs/api/shared/services/iplayermanagerservice)

**Profiler** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L92)

```csharp
IContextedProfilerService Profiler { get; }
```

#### Property Value

- [IContextedProfilerService](/docs/api/shared/profiler/icontextedprofilerservice)

**Scheduler** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L102)

```csharp
ISchedulerService Scheduler { get; }
```

#### Property Value

- [ISchedulerService](/docs/api/shared/scheduler/ischedulerservice)

**Trace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L97)

```csharp
ITraceManager Trace { get; }
```

#### Property Value

- [ITraceManager](/docs/api/shared/services/itracemanager)

**Translation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L112)

```csharp
ITranslationService Translation { get; }
```

#### Property Value

- [ITranslationService](/docs/api/shared/services/itranslationservice)

