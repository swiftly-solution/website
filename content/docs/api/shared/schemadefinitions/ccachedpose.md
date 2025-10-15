---
title: CCachedPose
---

```csharp
public interface CCachedPose : ISchemaClass<CCachedPose>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Cycle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCachedPose.cs#L23)

```csharp
ref float Cycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MorphWeights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCachedPose.cs#L19)

```csharp
ref CUtlVector<float> MorphWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Sequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCachedPose.cs#L21)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### Transforms

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCachedPose.cs#L17)

```csharp
ref CUtlVector<CTransform> Transforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

