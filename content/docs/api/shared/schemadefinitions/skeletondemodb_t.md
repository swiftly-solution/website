---
title: SkeletonDemoDb_t
---

```csharp
public interface SkeletonDemoDb_t : ISchemaClass<SkeletonDemoDb_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimCaptures

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonDemoDb_t.cs#L18)

```csharp
ref CUtlVector<PointerTo<SkeletonAnimCapture_t>> AnimCaptures { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[SkeletonAnimCapture_t](/docs/api/shared/schemadefinitions/skeletonanimcapture_t)>>

### CameraTrack

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonDemoDb_t.cs#L20)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Camera_t> CameraTrack { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SkeletonAnimCapture_t__Camera_t](/docs/api/shared/schemadefinitions/skeletonanimcapture_t__camera_t)>

### RecordingTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonDemoDb_t.cs#L22)

```csharp
ref float RecordingTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

