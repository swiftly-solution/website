---
title: CMsgTEBeamEntPoint
---

```csharp
public interface CMsgTEBeamEntPoint : ITypedProtobuf<CMsgTEBeamEntPoint>, INativeHandle, INetMessage<CMsgTEBeamEntPoint>, IDisposable
```

#### Implements

## Properties

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L18)

```csharp
CMsgTEBaseBeam Base { get; }
```

#### Property Value

- [CMsgTEBaseBeam](/docs/api/shared/protobufdefinitions/cmsgtebasebeam)

### End

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L30)

```csharp
Vector End { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Endentity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L24)

```csharp
uint Endentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Start

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L27)

```csharp
Vector Start { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Startentity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L21)

```csharp
uint Startentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

