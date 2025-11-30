---
title: MLGameState
---

# Interface MLGameState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLGameState.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface MLGameState : ITypedProtobuf<MLGameState>, INativeHandle
```

#### Implements

- [ITypedProtobuf<MLGameState>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Match

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLGameState.cs#L13)

```csharp
MLMatchState Match { get; }
```

#### Property Value

- [MLMatchState](/docs/api/protobufdefinitions/mlmatchstate)

### Players

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLGameState.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<MLPlayerState> Players { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[MLPlayerState](/docs/api/protobufdefinitions/mlplayerstate)>

### Round

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLGameState.cs#L16)

```csharp
MLRoundState Round { get; }
```

#### Property Value

- [MLRoundState](/docs/api/protobufdefinitions/mlroundstate)

