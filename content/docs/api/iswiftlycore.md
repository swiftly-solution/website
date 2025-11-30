---
title: ISwiftlyCore
---

# Interface ISwiftlyCore

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L28)

**Namespace**: [SwiftlyS2.Shared](/docs/api)

**Assembly**: SwiftlyS2.CS2.dll

Core interface of SwiftlyS2 framework.

```csharp
public interface ISwiftlyCore
```

## Properties

### CSGODirectory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L183)

Gets the absolute file path to the `game/csgo` directory.

```csharp
string CSGODirectory { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Command

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L63)

Command service.

```csharp
ICommandService Command { get; }
```

#### Property Value

- [ICommandService](/docs/api/commands/icommandservice)

### CommandLine

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L164)

Command line.

```csharp
ICommandLine CommandLine { get; }
```

#### Property Value

- [ICommandLine](/docs/api/commandline/icommandline)

### ConVar

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L78)

Convar service.

```csharp
IConVarService ConVar { get; }
```

#### Property Value

- [IConVarService](/docs/api/convars/iconvarservice)

### Configuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L83)

Configuration service.

```csharp
IPluginConfigurationService Configuration { get; }
```

#### Property Value

- [IPluginConfigurationService](/docs/api/services/ipluginconfigurationservice)

### ConsoleOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L68)

Console output service.

```csharp
IConsoleOutputService ConsoleOutput { get; }
```

#### Property Value

- [IConsoleOutputService](/docs/api/consoleoutput/iconsoleoutputservice)

### Database

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L128)

Database service.

```csharp
IDatabaseService Database { get; }
```

#### Property Value

- [IDatabaseService](/docs/api/database/idatabaseservice)

### Engine

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L38)

Gets the engine service used to perform core engine operations.

```csharp
IEngineService Engine { get; }
```

#### Property Value

- [IEngineService](/docs/api/services/iengineservice)

### EntitySystem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L73)

Entity system service.

```csharp
IEntitySystemService EntitySystem { get; }
```

#### Property Value

- [IEntitySystemService](/docs/api/entitysystem/ientitysystemservice)

### Event

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L33)

Custom event subscriber.

```csharp
IEventSubscriber Event { get; }
```

#### Property Value

- [IEventSubscriber](/docs/api/events/ieventsubscriber)

### Game

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L58)

Game service.

```csharp
IGameService Game { get; }
```

#### Property Value

- [IGameService](/docs/api/services/igameservice)

### GameData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L88)

Game data service.

```csharp
IGameDataService GameData { get; }
```

#### Property Value

- [IGameDataService](/docs/api/services/igamedataservice)

### GameDirectory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L188)

Gets the absolute file path to the game's root directory.

```csharp
string GameDirectory { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GameEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L43)

Game event service.

```csharp
IGameEventService GameEvent { get; }
```

#### Property Value

- [IGameEventService](/docs/api/gameevents/igameeventservice)

### GameFileSystem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L169)

Game file system interface.

```csharp
IGameFileSystem GameFileSystem { get; }
```

#### Property Value

- [IGameFileSystem](/docs/api/filesystem/igamefilesystem)

### Helpers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L53)

Helpers service.

```csharp
IHelpers Helpers { get; }
```

#### Property Value

- [IHelpers](/docs/api/helpers/ihelpers)

### Localizer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L138)

Localizer.

```csharp
ILocalizer Localizer { get; }
```

#### Property Value

- [ILocalizer](/docs/api/translation/ilocalizer)

### Logger

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L108)

Default logger.

```csharp
ILogger Logger { get; }
```

#### Property Value

- [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

### LoggerFactory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L103)

Logger factory.

```csharp
ILoggerFactory LoggerFactory { get; }
```

#### Property Value

- [ILoggerFactory](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.iloggerfactory)

### Memory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L98)

Memory service.

```csharp
IMemoryService Memory { get; }
```

#### Property Value

- [IMemoryService](/docs/api/memory/imemoryservice)

### MenusAPI

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L159)

Menu manager API.

```csharp
IMenuManagerAPI MenusAPI { get; }
```

#### Property Value

- [IMenuManagerAPI](/docs/api/menus/imenumanagerapi)

### NetMessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L48)

Net message service.

```csharp
INetMessageService NetMessage { get; }
```

#### Property Value

- [INetMessageService](/docs/api/netmessages/inetmessageservice)

### Permission

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L143)

Permission manager.

```csharp
IPermissionManager Permission { get; }
```

#### Property Value

- [IPermissionManager](/docs/api/permissions/ipermissionmanager)

### PlayerManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L93)

Player manager service.

```csharp
IPlayerManagerService PlayerManager { get; }
```

#### Property Value

- [IPlayerManagerService](/docs/api/players/iplayermanagerservice)

### PluginDataDirectory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L194)

Gets the file path to the plugin data directory.
This directory is ensured to exist by the framework.

```csharp
string PluginDataDirectory { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PluginPath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L178)

Gets the file path to the plugin directory.

```csharp
string PluginPath { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Profiler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L113)

Profiler service.

```csharp
IContextedProfilerService Profiler { get; }
```

#### Property Value

- [IContextedProfilerService](/docs/api/profiler/icontextedprofilerservice)

### Registrator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L148)

Registrator service.

```csharp
IRegistratorService Registrator { get; }
```

#### Property Value

- [IRegistratorService](/docs/api/services/iregistratorservice)

### Scheduler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L123)

Scheduler service.

```csharp
ISchedulerService Scheduler { get; }
```

#### Property Value

- [ISchedulerService](/docs/api/scheduler/ischedulerservice)

### Trace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L118)

Gets the trace manager used to control and configure tracing operations within the game.

```csharp
ITraceManager Trace { get; }
```

#### Property Value

- [ITraceManager](/docs/api/services/itracemanager)

### Translation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L133)

Translation service.

```csharp
ITranslationService Translation { get; }
```

#### Property Value

- [ITranslationService](/docs/api/translation/itranslationservice)

