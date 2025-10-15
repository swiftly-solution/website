---
title: CTargetWarpUpdateNode
---

```csharp
public interface CTargetWarpUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CTargetWarpUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AngleMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L17)

```csharp
ref TargetWarpAngleMode_t AngleMode { get; }
```

#### Property Value

- [TargetWarpAngleMode_t](/docs/api/shared/schemadefinitions/targetwarpanglemode_t)

### CorrectionMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L29)

```csharp
ref TargetWarpCorrectionMethod CorrectionMethod { get; }
```

#### Property Value

- [TargetWarpCorrectionMethod](/docs/api/shared/schemadefinitions/targetwarpcorrectionmethod)

### DesiredMoveHeadingParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L27)

```csharp
CAnimParamHandle DesiredMoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### MaxAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L43)

```csharp
ref float MaxAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MoveHeadingParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L25)

```csharp
CAnimParamHandle MoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### OnlyWarpWhenTagIsFound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L37)

```csharp
ref bool OnlyWarpWhenTagIsFound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetFacePositionIsWorldSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L33)

```csharp
ref bool TargetFacePositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetFacePositionParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L23)

```csharp
CAnimParamHandle TargetFacePositionParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### TargetPositionIsWorldSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L35)

```csharp
ref bool TargetPositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetPositionParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L19)

```csharp
CAnimParamHandle TargetPositionParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### TargetUpVectorParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L21)

```csharp
CAnimParamHandle TargetUpVectorParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### TargetWarpTimingMethod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L31)

```csharp
ref TargetWarpTimingMethod TargetWarpTimingMethod { get; }
```

#### Property Value

- [TargetWarpTimingMethod](/docs/api/shared/schemadefinitions/targetwarptimingmethod)

### WarpAroundCenter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L41)

```csharp
ref bool WarpAroundCenter { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WarpOrientationDuringTranslation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetWarpUpdateNode.cs#L39)

```csharp
ref bool WarpOrientationDuringTranslation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

