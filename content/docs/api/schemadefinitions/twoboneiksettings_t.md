---
title: TwoBoneIKSettings_t
---

# Interface TwoBoneIKSettings_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface TwoBoneIKSettings_t : ISchemaClass<TwoBoneIKSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<TwoBoneIKSettings_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AlwaysUseFallbackHinge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L32)

```csharp
ref bool AlwaysUseFallbackHinge { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConstrainTwist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L44)

```csharp
ref bool ConstrainTwist { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndBoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L40)

```csharp
ref int EndBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndEffectorAttachment

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L20)

```csharp
CAnimAttachment EndEffectorAttachment { get; }
```

#### Property Value

- [CAnimAttachment](/docs/api/schemadefinitions/canimattachment)

### EndEffectorType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L18)

```csharp
ref IkEndEffectorType EndEffectorType { get; }
```

#### Property Value

- [IkEndEffectorType](/docs/api/schemadefinitions/ikendeffectortype)

### FixedBoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L36)

```csharp
ref int FixedBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LsFallbackHingeAxis

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L34)

```csharp
ref Vector LsFallbackHingeAxis { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MatchTargetOrientation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L42)

```csharp
ref bool MatchTargetOrientation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxTwist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L46)

```csharp
ref float MaxTwist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MiddleBoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L38)

```csharp
ref int MiddleBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PositionParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L28)

```csharp
CAnimParamHandle PositionParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### RotationParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L30)

```csharp
CAnimParamHandle RotationParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### TargetAttachment

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L24)

```csharp
CAnimAttachment TargetAttachment { get; }
```

#### Property Value

- [CAnimAttachment](/docs/api/schemadefinitions/canimattachment)

### TargetBoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L26)

```csharp
ref int TargetBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L22)

```csharp
ref IkTargetType TargetType { get; }
```

#### Property Value

- [IkTargetType](/docs/api/schemadefinitions/iktargettype)

