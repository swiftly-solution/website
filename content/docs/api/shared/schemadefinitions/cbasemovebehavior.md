---
title: CBaseMoveBehavior
---

```csharp
public interface CBaseMoveBehavior : CPathKeyFrame, CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPathKeyFrame>, ISchemaClass<CBaseMoveBehavior>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AnimEndTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L22)

```csharp
ref float AnimEndTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AnimStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L20)

```csharp
ref float AnimStartTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AverageSpeedAcrossFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L24)

```csharp
ref float AverageSpeedAcrossFrame { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CurrentKeyFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L26)

```csharp
CPathKeyFrame? CurrentKeyFrame { get; }
```

- Property Value

- [CPathKeyFrame](/docs/api/shared/schemadefinitions/cpathkeyframe)?

### **Direction** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L36)

```csharp
ref int Direction { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PositionInterpolator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L16)

```csharp
ref int PositionInterpolator { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PostKeyFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L32)

```csharp
CPathKeyFrame? PostKeyFrame { get; }
```

- Property Value

- [CPathKeyFrame](/docs/api/shared/schemadefinitions/cpathkeyframe)?

### **PreKeyFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L30)

```csharp
CPathKeyFrame? PreKeyFrame { get; }
```

- Property Value

- [CPathKeyFrame](/docs/api/shared/schemadefinitions/cpathkeyframe)?

### **RotationInterpolator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L18)

```csharp
ref int RotationInterpolator { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TargetKeyFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L28)

```csharp
CPathKeyFrame? TargetKeyFrame { get; }
```

- Property Value

- [CPathKeyFrame](/docs/api/shared/schemadefinitions/cpathkeyframe)?

### **TimeIntoFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseMoveBehavior.cs#L34)

```csharp
ref float TimeIntoFrame { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

