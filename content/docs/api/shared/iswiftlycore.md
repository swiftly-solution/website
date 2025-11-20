---
title: ISwiftlyCore
---

```csharp
public interface ISwiftlyCore
```

## Properties

### CSGODirectory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L178)

```csharp
string CSGODirectory { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Command

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L62)

```csharp
ICommandService Command { get; }
```

#### Property Value

- [ICommandService](/docs/api/shared/commands/icommandservice)

### CommandLine

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L163)

```csharp
ICommandLine CommandLine { get; }
```

#### Property Value

- [ICommandLine](/docs/api/shared/commandline/icommandline)

### ConVar

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L77)

```csharp
IConVarService ConVar { get; }
```

#### Property Value

- [IConVarService](/docs/api/shared/convars/iconvarservice)

### Configuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L82)

```csharp
IPluginConfigurationService Configuration { get; }
```

#### Property Value

- [IPluginConfigurationService](/docs/api/shared/services/ipluginconfigurationservice)

### ConsoleOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L67)

```csharp
IConsoleOutputService ConsoleOutput { get; }
```

#### Property Value

- [IConsoleOutputService](/docs/api/shared/consoleoutput/iconsoleoutputservice)

### Database

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L127)

```csharp
IDatabaseService Database { get; }
```

#### Property Value

- [IDatabaseService](/docs/api/shared/database/idatabaseservice)

### Engine

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L37)

```csharp
IEngineService Engine { get; }
```

#### Property Value

- [IEngineService](/docs/api/shared/services/iengineservice)

### EntitySystem

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L72)

```csharp
IEntitySystemService EntitySystem { get; }
```

#### Property Value

- [IEntitySystemService](/docs/api/shared/entitysystem/ientitysystemservice)

### Event

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L32)

```csharp
IEventSubscriber Event { get; }
```

#### Property Value

- [IEventSubscriber](/docs/api/shared/events/ieventsubscriber)

### Game

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L57)

```csharp
IGameService Game { get; }
```

#### Property Value

- [IGameService](/docs/api/shared/services/igameservice)

### GameData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L87)

```csharp
IGameDataService GameData { get; }
```

#### Property Value

- [IGameDataService](/docs/api/shared/services/igamedataservice)

### GameDirectory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L183)

```csharp
string GameDirectory { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GameEvent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L42)

```csharp
IGameEventService GameEvent { get; }
```

#### Property Value

- [IGameEventService](/docs/api/shared/gameevents/igameeventservice)

### GameFileSystem

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L168)

```csharp
IGameFileSystem GameFileSystem { get; }
```

#### Property Value

- [IGameFileSystem](/docs/api/shared/filesystem/igamefilesystem)

### Helpers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L52)

```csharp
IHelpers Helpers { get; }
```

#### Property Value

- [IHelpers](/docs/api/shared/helpers/ihelpers)

### Localizer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L137)

```csharp
ILocalizer Localizer { get; }
```

#### Property Value

- [ILocalizer](/docs/api/shared/translation/ilocalizer)

### Logger

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L107)

```csharp
ILogger Logger { get; }
```

#### Property Value

- [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

### LoggerFactory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L102)

```csharp
ILoggerFactory LoggerFactory { get; }
```

#### Property Value

- [ILoggerFactory](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.iloggerfactory)

### Memory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L97)

```csharp
IMemoryService Memory { get; }
```

#### Property Value

- [IMemoryService](/docs/api/shared/memory/imemoryservice)

### MenusAPI

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L158)

```csharp
IMenuManagerAPI MenusAPI { get; }
```

#### Property Value

- [IMenuManagerAPI](/docs/api/shared/menus/imenumanagerapi)

### NetMessage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L47)

```csharp
INetMessageService NetMessage { get; }
```

#### Property Value

- [INetMessageService](/docs/api/shared/netmessages/inetmessageservice)

### Permission

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L142)

```csharp
IPermissionManager Permission { get; }
```

#### Property Value

- [IPermissionManager](/docs/api/shared/permissions/ipermissionmanager)

### PlayerManager

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L92)

```csharp
IPlayerManagerService PlayerManager { get; }
```

#### Property Value

- [IPlayerManagerService](/docs/api/shared/players/iplayermanagerservice)

### PluginDataDirectory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L189)

```csharp
string PluginDataDirectory { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PluginPath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L173)

```csharp
string PluginPath { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Profiler

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L112)

```csharp
IContextedProfilerService Profiler { get; }
```

#### Property Value

- [IContextedProfilerService](/docs/api/shared/profiler/icontextedprofilerservice)

### Registrator

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L147)

```csharp
IRegistratorService Registrator { get; }
```

#### Property Value

- [IRegistratorService](/docs/api/shared/services/iregistratorservice)

### Scheduler

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L122)

```csharp
ISchedulerService Scheduler { get; }
```

#### Property Value

- [ISchedulerService](/docs/api/shared/scheduler/ischedulerservice)

### Trace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L117)

```csharp
ITraceManager Trace { get; }
```

#### Property Value

- [ITraceManager](/docs/api/shared/services/itracemanager)

### Translation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/ISwiftlyCore.cs#L132)

```csharp
ITranslationService Translation { get; }
```

#### Property Value

- [ITranslationService](/docs/api/shared/translation/itranslationservice)

