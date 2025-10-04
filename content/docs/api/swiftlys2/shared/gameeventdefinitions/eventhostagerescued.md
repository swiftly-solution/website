---
title: EventHostageRescued
---

```csharp
public interface EventHostageRescued : IGameEvent<EventHostageRescued>
```

#### Implements

## Properties

**Hostage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHostageRescued.cs#L43)

```csharp
short Hostage { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**Site** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHostageRescued.cs#L50)

```csharp
short Site { get; set; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**UserId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHostageRescued.cs#L36)

```csharp
int UserId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**UserIdController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHostageRescued.cs#L22)

```csharp
CCSPlayerController UserIdController { get; }
```

#### Property Value

- [CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)

**UserIdPawn** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHostageRescued.cs#L29)

```csharp
CCSPlayerPawn UserIdPawn { get; }
```

#### Property Value

- [CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)

