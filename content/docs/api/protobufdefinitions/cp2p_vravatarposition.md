---
title: CP2P_VRAvatarPosition
---

# Interface CP2P_VRAvatarPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_VRAvatarPosition.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CP2P_VRAvatarPosition : ITypedProtobuf<CP2P_VRAvatarPosition>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CP2P_VRAvatarPosition>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BodyParts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_VRAvatarPosition.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CP2P_VRAvatarPosition_COrientation> BodyParts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CP2P_VRAvatarPosition_COrientation](/docs/api/protobufdefinitions/cp2p_vravatarposition_corientation)>

### HatId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_VRAvatarPosition.cs#L16)

```csharp
int HatId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SceneId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_VRAvatarPosition.cs#L19)

```csharp
int SceneId { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WorldScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_VRAvatarPosition.cs#L22)

```csharp
int WorldScale { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

