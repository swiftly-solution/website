---
title: AimMatrixOpFixedSettings_t
---

# Interface AimMatrixOpFixedSettings_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AimMatrixOpFixedSettings_t : ISchemaClass<AimMatrixOpFixedSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AimMatrixOpFixedSettings_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Attachment

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L18)

```csharp
CAnimAttachment Attachment { get; }
```

#### Property Value

- [CAnimAttachment](/docs/api/schemadefinitions/canimattachment)

### BiasAndClampBlendCurve

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L43)

```csharp
CBlendCurve BiasAndClampBlendCurve { get; }
```

#### Property Value

- [CBlendCurve](/docs/api/schemadefinitions/cblendcurve)

### BiasAndClampPitchOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L41)

```csharp
ref float BiasAndClampPitchOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BiasAndClampYawOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L39)

```csharp
ref float BiasAndClampYawOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BlendMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L25)

```csharp
ref AimMatrixBlendMode BlendMode { get; }
```

#### Property Value

- [AimMatrixBlendMode](/docs/api/schemadefinitions/aimmatrixblendmode)

### BoneMaskIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L33)

```csharp
ref int BoneMaskIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Damping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L20)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/schemadefinitions/caniminputdamping)

### MaxPitchAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L29)

```csharp
ref float MaxPitchAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxYawAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L27)

```csharp
ref float MaxYawAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PoseCacheHandles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L23)

```csharp
SchemaUntypedField PoseCacheHandles { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### SequenceMaxFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L31)

```csharp
ref int SequenceMaxFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetIsPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L35)

```csharp
ref bool TargetIsPosition { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseBiasAndClamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AimMatrixOpFixedSettings_t.cs#L37)

```csharp
ref bool UseBiasAndClamp { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

