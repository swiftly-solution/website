---
title: CTargetWarpUpdateNode
---

# Interface CTargetWarpUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTargetWarpUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CTargetWarpUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTargetWarpUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AngleMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L18)

```csharp
ref TargetWarpAngleMode_t AngleMode { get; }
```

#### Property Value

- [TargetWarpAngleMode_t](/docs/api/schemadefinitions/targetwarpanglemode_t)

### CorrectionMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L30)

```csharp
ref TargetWarpCorrectionMethod CorrectionMethod { get; }
```

#### Property Value

- [TargetWarpCorrectionMethod](/docs/api/schemadefinitions/targetwarpcorrectionmethod)

### DesiredMoveHeadingParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L28)

```csharp
CAnimParamHandle DesiredMoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### MaxAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L44)

```csharp
ref float MaxAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveHeadingParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L26)

```csharp
CAnimParamHandle MoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### OnlyWarpWhenTagIsFound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L38)

```csharp
ref bool OnlyWarpWhenTagIsFound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetFacePositionIsWorldSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L34)

```csharp
ref bool TargetFacePositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetFacePositionParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L24)

```csharp
CAnimParamHandle TargetFacePositionParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### TargetPositionIsWorldSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L36)

```csharp
ref bool TargetPositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetPositionParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L20)

```csharp
CAnimParamHandle TargetPositionParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### TargetUpVectorParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L22)

```csharp
CAnimParamHandle TargetUpVectorParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### TargetWarpTimingMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L32)

```csharp
ref TargetWarpTimingMethod TargetWarpTimingMethod { get; }
```

#### Property Value

- [TargetWarpTimingMethod](/docs/api/schemadefinitions/targetwarptimingmethod)

### WarpAroundCenter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L42)

```csharp
ref bool WarpAroundCenter { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WarpOrientationDuringTranslation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L40)

```csharp
ref bool WarpOrientationDuringTranslation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

