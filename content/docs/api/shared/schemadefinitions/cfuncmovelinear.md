---
title: CFuncMoveLinear
---

```csharp
public interface CFuncMoveLinear : CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CFuncMoveLinear>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AllowMovableNavMeshDockingOnEntireEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L38)

```csharp
ref bool AllowMovableNavMeshDockingOnEntireEntity { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **AuthoredPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L16)

```csharp
ref MoveLinearAuthoredPos_t AuthoredPosition { get; }
```

- Property Value

- [MoveLinearAuthoredPos_t](/docs/api/shared/schemadefinitions/movelinearauthoredpos_t)

### **BlockDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L28)

```csharp
ref float BlockDamage { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **CreateMovableNavMesh** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L36)

```csharp
ref bool CreateMovableNavMesh { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CreateNavObstacle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L40)

```csharp
ref bool CreateNavObstacle { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CurrentSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L26)

```csharp
string CurrentSound { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **MoveDirParentSpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L20)

```csharp
ref Vector MoveDirParentSpace { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MoveEntitySpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L18)

```csharp
ref QAngle MoveEntitySpace { get; }
```

- Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **OnFullyClosed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L34)

```csharp
CEntityIOOutput OnFullyClosed { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnFullyOpen** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L32)

```csharp
CEntityIOOutput OnFullyOpen { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **SoundStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L22)

```csharp
string SoundStart { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SoundStop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L24)

```csharp
string SoundStop { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **StartPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncMoveLinear.cs#L30)

```csharp
ref float StartPosition { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

