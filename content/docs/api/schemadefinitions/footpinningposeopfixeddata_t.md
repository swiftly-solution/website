---
title: FootPinningPoseOpFixedData_t
---

# Interface FootPinningPoseOpFixedData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FootPinningPoseOpFixedData_t : ISchemaClass<FootPinningPoseOpFixedData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FootPinningPoseOpFixedData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ApplyFootRotationLimits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L30)

```csharp
ref bool ApplyFootRotationLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyLegTwistLimits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L28)

```csharp
ref bool ApplyLegTwistLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BlendTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L20)

```csharp
ref float BlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FootInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L18)

```csharp
ref CUtlVector<FootFixedData_t> FootInfo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FootFixedData_t](/docs/api/schemadefinitions/footfixeddata_t)>

### HipBoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L26)

```csharp
ref int HipBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LockBreakDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L22)

```csharp
ref float LockBreakDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxLegTwist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootPinningPoseOpFixedData_t.cs#L24)

```csharp
ref float MaxLegTwist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

