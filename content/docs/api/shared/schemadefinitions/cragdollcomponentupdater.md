---
title: CRagdollComponentUpdater
---

```csharp
public interface CRagdollComponentUpdater : CAnimComponentUpdater, ISchemaClass<CAnimComponentUpdater>, ISchemaClass<CRagdollComponentUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BoneIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L22)

```csharp
ref CUtlVector<int> BoneIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**BoneNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L24)

```csharp
ref CUtlVector<CUtlString> BoneNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

**BoneToWeightIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L29)

```csharp
ref CUtlVector<int> BoneToWeightIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**FollowAttachmentNodePaths** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L20)

```csharp
ref CUtlVector FollowAttachmentNodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**MaxStretch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L35)

```csharp
ref float MaxStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**RagdollNodePaths** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L17)

```csharp
ref CUtlVector RagdollNodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**SolidCollisionAtZeroWeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L37)

```csharp
ref bool SolidCollisionAtZeroWeight { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SpringFrequencyMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L33)

```csharp
ref float SpringFrequencyMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SpringFrequencyMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L31)

```csharp
ref float SpringFrequencyMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**WeightLists** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L27)

```csharp
ref CUtlVector WeightLists { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

