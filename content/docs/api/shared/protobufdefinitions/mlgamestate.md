---
title: MLGameState
---

```csharp
public interface MLGameState : ITypedProtobuf<MLGameState>, INativeHandle
```

#### Implements

## Properties

### Match

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLGameState.cs#L13)

```csharp
MLMatchState Match { get; }
```

#### Property Value

- [MLMatchState](/docs/api/shared/protobufdefinitions/mlmatchstate)

### Players

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLGameState.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<MLPlayerState> Players { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[MLPlayerState](/docs/api/shared/protobufdefinitions/mlplayerstate)>

### Round

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLGameState.cs#L16)

```csharp
MLRoundState Round { get; }
```

#### Property Value

- [MLRoundState](/docs/api/shared/protobufdefinitions/mlroundstate)

