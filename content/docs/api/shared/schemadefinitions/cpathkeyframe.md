---
title: CPathKeyFrame
---

```csharp
public interface CPathKeyFrame : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CPathKeyFrame>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Angle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L20)

```csharp
ref Quaternion Angle { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### **Angles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L18)

```csharp
ref QAngle Angles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **MoveSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L30)

```csharp
ref float MoveSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NextKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L22)

```csharp
string NextKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **NextKey1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L26)

```csharp
CPathKeyFrame? NextKey1 { get; }
```

#### Property Value

- [CPathKeyFrame](/docs/api/shared/schemadefinitions/cpathkeyframe)?

### **NextTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L24)

```csharp
ref float NextTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Origin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L16)

```csharp
ref Vector Origin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **PrevKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathKeyFrame.cs#L28)

```csharp
CPathKeyFrame? PrevKey { get; }
```

#### Property Value

- [CPathKeyFrame](/docs/api/shared/schemadefinitions/cpathkeyframe)?

