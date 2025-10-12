---
title: CMsgTEBeamPoints
---

```csharp
public interface CMsgTEBeamPoints : ITypedProtobuf<CMsgTEBeamPoints>, INativeHandle, INetMessage<CMsgTEBeamPoints>, IDisposable
```

#### Implements

## Properties

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamPoints.cs#L18)

```csharp
CMsgTEBaseBeam Base { get; }
```

#### Property Value

- [CMsgTEBaseBeam](/docs/api/shared/protobufdefinitions/cmsgtebasebeam)

### End

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamPoints.cs#L24)

```csharp
Vector End { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Start

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamPoints.cs#L21)

```csharp
Vector Start { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

