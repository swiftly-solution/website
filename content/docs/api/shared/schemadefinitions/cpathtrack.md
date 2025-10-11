---
title: CPathTrack
---

```csharp
public interface CPathTrack : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPathTrack>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AltName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L26)

```csharp
string AltName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **IterVal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L28)

```csharp
ref int IterVal { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Length** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L24)

```csharp
ref float Length { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OnPass** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L32)

```csharp
CEntityIOOutput OnPass { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OrientationType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L30)

```csharp
ref TrackOrientationType_t OrientationType { get; }
```

#### Property Value

- [TrackOrientationType_t](/docs/api/shared/schemadefinitions/trackorientationtype_t)

### **Paltpath** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L20)

```csharp
CPathTrack? Paltpath { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### **Pnext** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L16)

```csharp
CPathTrack? Pnext { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### **Pprevious** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L18)

```csharp
CPathTrack? Pprevious { get; }
```

#### Property Value

- [CPathTrack](/docs/api/shared/schemadefinitions/cpathtrack)?

### **Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathTrack.cs#L22)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

