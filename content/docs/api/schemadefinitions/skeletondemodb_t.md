---
title: SkeletonDemoDb_t
---

# Interface SkeletonDemoDb_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonDemoDb_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SkeletonDemoDb_t : ISchemaClass<SkeletonDemoDb_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SkeletonDemoDb_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimCaptures

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonDemoDb_t.cs#L18)

```csharp
ref CUtlVector<PointerTo<SkeletonAnimCapture_t>> AnimCaptures { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[SkeletonAnimCapture_t](/docs/api/schemadefinitions/skeletonanimcapture_t)>>

### CameraTrack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonDemoDb_t.cs#L20)

```csharp
ref CUtlVector<SkeletonAnimCapture_t__Camera_t> CameraTrack { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SkeletonAnimCapture_t__Camera_t](/docs/api/schemadefinitions/skeletonanimcapture_t__camera_t)>

### RecordingTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SkeletonDemoDb_t.cs#L22)

```csharp
ref float RecordingTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

