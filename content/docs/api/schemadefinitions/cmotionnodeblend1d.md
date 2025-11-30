---
title: CMotionNodeBlend1D
---

# Interface CMotionNodeBlend1D

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionNodeBlend1D.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMotionNodeBlend1D : CMotionNode, ISchemaClass<CMotionNode>, ISchemaClass<CMotionNodeBlend1D>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CMotionNode](/docs/api/schemadefinitions/cmotionnode)
- [ISchemaClass<CMotionNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMotionNodeBlend1D>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendItems

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionNodeBlend1D.cs#L18)

```csharp
ref CUtlVector<MotionBlendItem> BlendItems { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MotionBlendItem](/docs/api/schemadefinitions/motionblenditem)>

### ParamIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionNodeBlend1D.cs#L20)

```csharp
ref int ParamIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

