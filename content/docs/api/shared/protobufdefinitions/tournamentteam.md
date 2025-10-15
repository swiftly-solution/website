---
title: TournamentTeam
---

```csharp
public interface TournamentTeam : ITypedProtobuf<TournamentTeam>, INativeHandle
```

#### Implements

## Properties

### Players

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentPlayer> Players { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[TournamentPlayer](/docs/api/shared/protobufdefinitions/tournamentplayer)>

### TeamFlag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L19)

```csharp
string TeamFlag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TeamId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L13)

```csharp
int TeamId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L22)

```csharp
string TeamName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TeamTag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L16)

```csharp
string TeamTag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

