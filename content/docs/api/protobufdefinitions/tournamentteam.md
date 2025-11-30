---
title: TournamentTeam
---

# Interface TournamentTeam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface TournamentTeam : ITypedProtobuf<TournamentTeam>, INativeHandle
```

#### Implements

- [ITypedProtobuf<TournamentTeam>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Players

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<TournamentPlayer> Players { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[TournamentPlayer](/docs/api/protobufdefinitions/tournamentplayer)>

### TeamFlag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L19)

```csharp
string TeamFlag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TeamId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L13)

```csharp
int TeamId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L22)

```csharp
string TeamName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TeamTag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/TournamentTeam.cs#L16)

```csharp
string TeamTag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

