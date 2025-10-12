---
title: CNmFollowBoneNode__CDefinition
---

```csharp
public interface CNmFollowBoneNode__CDefinition : CNmPassthroughNode__CDefinition, CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmPassthroughNode__CDefinition>, ISchemaClass<CNmFollowBoneNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Bone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFollowBoneNode__CDefinition.cs#L16)

```csharp
ref CGlobalSymbol Bone { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### EnabledNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFollowBoneNode__CDefinition.cs#L20)

```csharp
ref short EnabledNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### FollowTargetBone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFollowBoneNode__CDefinition.cs#L18)

```csharp
ref CGlobalSymbol FollowTargetBone { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### Mode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFollowBoneNode__CDefinition.cs#L22)

```csharp
ref NmFollowBoneMode_t Mode { get; }
```

#### Property Value

- [NmFollowBoneMode_t](/docs/api/shared/schemadefinitions/nmfollowbonemode_t)

