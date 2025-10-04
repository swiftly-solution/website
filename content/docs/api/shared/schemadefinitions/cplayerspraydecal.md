---
title: CPlayerSprayDecal
---

```csharp
public interface CPlayerSprayDecal : CModelPointEntity, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CModelPointEntity>, ISchemaClass<CPlayerSprayDecal>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AccountID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L18)

```csharp
ref uint AccountID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**CreationTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L38)

```csharp
ref float CreationTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**EndPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L24)

```csharp
ref Vector EndPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Entity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L34)

```csharp
ref int Entity { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Hitbox** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L36)

```csharp
ref int Hitbox { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Left** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L28)

```csharp
ref Vector Left { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Normal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L30)

```csharp
ref Vector Normal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Player** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L32)

```csharp
ref int Player { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RtGcTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L22)

```csharp
ref uint RtGcTime { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Signature** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L44)

```csharp
ISchemaFixedArray<byte> Signature { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

**Start** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L26)

```csharp
ref Vector Start { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**TintID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L40)

```csharp
ref int TintID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TraceID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L20)

```csharp
ref uint TraceID { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**UniqueID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L16)

```csharp
ref int UniqueID { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Version** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L42)

```csharp
ref byte Version { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

**AccountIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L47)

```csharp
void AccountIDUpdated()
```

**CreationTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L57)

```csharp
void CreationTimeUpdated()
```

**EndPosUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L50)

```csharp
void EndPosUpdated()
```

**EntityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L55)

```csharp
void EntityUpdated()
```

**HitboxUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L56)

```csharp
void HitboxUpdated()
```

**LeftUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L52)

```csharp
void LeftUpdated()
```

**NormalUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L53)

```csharp
void NormalUpdated()
```

**PlayerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L54)

```csharp
void PlayerUpdated()
```

**RtGcTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L49)

```csharp
void RtGcTimeUpdated()
```

**SignatureUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L60)

```csharp
void SignatureUpdated()
```

**StartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L51)

```csharp
void StartUpdated()
```

**TintIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L58)

```csharp
void TintIDUpdated()
```

**TraceIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L48)

```csharp
void TraceIDUpdated()
```

**UniqueIDUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L46)

```csharp
void UniqueIDUpdated()
```

**VersionUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerSprayDecal.cs#L59)

```csharp
void VersionUpdated()
```

