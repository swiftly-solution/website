---
title: CAnimEncodedFrames
---

```csharp
public interface CAnimEncodedFrames : ISchemaClass<CAnimEncodedFrames>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FileName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L17)

```csharp
ref CBufferString FileName { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### FrameblockArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L23)

```csharp
ref CUtlVector<CAnimFrameBlockAnim> FrameblockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimFrameBlockAnim](/docs/api/shared/schemadefinitions/canimframeblockanim)>

### Frames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L19)

```csharp
ref int Frames { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FramesPerBlock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L21)

```csharp
ref int FramesPerBlock { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UsageDifferences

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEncodedFrames.cs#L25)

```csharp
CAnimEncodeDifference UsageDifferences { get; }
```

#### Property Value

- [CAnimEncodeDifference](/docs/api/shared/schemadefinitions/canimencodedifference)

