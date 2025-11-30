---
title: LookAtOpFixedSettings_t
---

# Interface LookAtOpFixedSettings_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface LookAtOpFixedSettings_t : ISchemaClass<LookAtOpFixedSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<LookAtOpFixedSettings_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Attachment

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L18)

```csharp
CAnimAttachment Attachment { get; }
```

#### Property Value

- [CAnimAttachment](/docs/api/schemadefinitions/canimattachment)

### Bones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L22)

```csharp
ref CUtlVector<LookAtBone_t> Bones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[LookAtBone_t](/docs/api/schemadefinitions/lookatbone_t)>

### Damping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L20)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/schemadefinitions/caniminputdamping)

### HysteresisInnerAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L28)

```csharp
ref float HysteresisInnerAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HysteresisOuterAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L30)

```csharp
ref float HysteresisOuterAngle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaintainUpDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L34)

```csharp
ref bool MaintainUpDirection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PitchLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L26)

```csharp
ref float PitchLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RotateYawForward

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L32)

```csharp
ref bool RotateYawForward { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetIsPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L36)

```csharp
ref bool TargetIsPosition { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseHysteresis

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L38)

```csharp
ref bool UseHysteresis { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### YawLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/LookAtOpFixedSettings_t.cs#L24)

```csharp
ref float YawLimit { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

