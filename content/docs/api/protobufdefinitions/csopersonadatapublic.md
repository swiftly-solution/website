---
title: CSOPersonaDataPublic
---

# Interface CSOPersonaDataPublic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOPersonaDataPublic.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSOPersonaDataPublic : ITypedProtobuf<CSOPersonaDataPublic>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSOPersonaDataPublic>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Commendation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOPersonaDataPublic.cs#L16)

```csharp
PlayerCommendationInfo Commendation { get; }
```

#### Property Value

- [PlayerCommendationInfo](/docs/api/protobufdefinitions/playercommendationinfo)

### ElevatedState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOPersonaDataPublic.cs#L19)

```csharp
bool ElevatedState { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayerLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOPersonaDataPublic.cs#L13)

```csharp
int PlayerLevel { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### XpTrailLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOPersonaDataPublic.cs#L25)

```csharp
uint XpTrailLevel { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### XpTrailTimestampRefresh

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSOPersonaDataPublic.cs#L22)

```csharp
uint XpTrailTimestampRefresh { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

