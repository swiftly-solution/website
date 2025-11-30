---
title: CJumpHelperUpdateNode
---

# Interface CJumpHelperUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CJumpHelperUpdateNode : CSequenceUpdateNode, CSequenceUpdateNodeBase, CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CSequenceUpdateNodeBase>, ISchemaClass<CSequenceUpdateNode>, ISchemaClass<CJumpHelperUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSequenceUpdateNode](/docs/api/schemadefinitions/csequenceupdatenode)
- [CSequenceUpdateNodeBase](/docs/api/schemadefinitions/csequenceupdatenodebase)
- [CLeafUpdateNode](/docs/api/schemadefinitions/cleafupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CLeafUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSequenceUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSequenceUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CJumpHelperUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CorrectionMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L28)

```csharp
ref JumpCorrectionMethod CorrectionMethod { get; }
```

#### Property Value

- [JumpCorrectionMethod](/docs/api/schemadefinitions/jumpcorrectionmethod)

### JumpEndCycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L26)

```csharp
ref float JumpEndCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### JumpStartCycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L24)

```csharp
ref float JumpStartCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OriginalJumpDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L22)

```csharp
ref float OriginalJumpDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OriginalJumpMovement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L20)

```csharp
ref Vector OriginalJumpMovement { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ScaleSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L32)

```csharp
ref bool ScaleSpeed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L18)

```csharp
CAnimParamHandle TargetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### TranslationAxis

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L30)

```csharp
ISchemaFixedArray<bool> TranslationAxis { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

