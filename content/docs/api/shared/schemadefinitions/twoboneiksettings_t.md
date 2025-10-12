---
title: TwoBoneIKSettings_t
---

```csharp
public interface TwoBoneIKSettings_t : ISchemaClass<TwoBoneIKSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AlwaysUseFallbackHinge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L30)

```csharp
ref bool AlwaysUseFallbackHinge { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ConstrainTwist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L42)

```csharp
ref bool ConstrainTwist { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EndBoneIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L38)

```csharp
ref int EndBoneIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **EndEffectorAttachment** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L18)

```csharp
CAnimAttachment EndEffectorAttachment { get; }
```

- Property Value

- [CAnimAttachment](/docs/api/shared/schemadefinitions/canimattachment)

### **EndEffectorType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L16)

```csharp
ref IkEndEffectorType EndEffectorType { get; }
```

- Property Value

- [IkEndEffectorType](/docs/api/shared/schemadefinitions/ikendeffectortype)

### **FixedBoneIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L34)

```csharp
ref int FixedBoneIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **LsFallbackHingeAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L32)

```csharp
ref Vector LsFallbackHingeAxis { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MatchTargetOrientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L40)

```csharp
ref bool MatchTargetOrientation { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MaxTwist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L44)

```csharp
ref float MaxTwist { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MiddleBoneIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L36)

```csharp
ref int MiddleBoneIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PositionParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L26)

```csharp
CAnimParamHandle PositionParam { get; }
```

- Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **RotationParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L28)

```csharp
CAnimParamHandle RotationParam { get; }
```

- Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **TargetAttachment** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L22)

```csharp
CAnimAttachment TargetAttachment { get; }
```

- Property Value

- [CAnimAttachment](/docs/api/shared/schemadefinitions/canimattachment)

### **TargetBoneIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L24)

```csharp
ref int TargetBoneIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TargetType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/TwoBoneIKSettings_t.cs#L20)

```csharp
ref IkTargetType TargetType { get; }
```

- Property Value

- [IkTargetType](/docs/api/shared/schemadefinitions/iktargettype)

