---
title: CNmTwoBoneIKNode__CDefinition
---

# Interface CNmTwoBoneIKNode__CDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmTwoBoneIKNode__CDefinition : CNmPassthroughNode__CDefinition, CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmPassthroughNode__CDefinition>, ISchemaClass<CNmTwoBoneIKNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmPassthroughNode__CDefinition](/docs/api/schemadefinitions/cnmpassthroughnode__cdefinition)
- [CNmPoseNode__CDefinition](/docs/api/schemadefinitions/cnmposenode__cdefinition)
- [CNmGraphNode__CDefinition](/docs/api/schemadefinitions/cnmgraphnode__cdefinition)
- [ISchemaClass<CNmGraphNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmPoseNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmPassthroughNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmTwoBoneIKNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L26)

```csharp
ref NmIKBlendMode_t BlendMode { get; }
```

#### Property Value

- [NmIKBlendMode_t](/docs/api/schemadefinitions/nmikblendmode_t)

### BlendTimeSeconds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L24)

```csharp
ref float BlendTimeSeconds { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EffectorBoneID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L18)

```csharp
ref CGlobalSymbol EffectorBoneID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### EffectorTargetNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L20)

```csharp
ref short EffectorTargetNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### EnabledNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L22)

```csharp
ref short EnabledNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### IsTargetInWorldSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTwoBoneIKNode__CDefinition.cs#L28)

```csharp
ref bool IsTargetInWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

