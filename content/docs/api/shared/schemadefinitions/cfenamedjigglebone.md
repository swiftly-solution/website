---
title: CFeNamedJiggleBone
---

```csharp
public interface CFeNamedJiggleBone : ISchemaClass<CFeNamedJiggleBone>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**JiggleBone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L22)

```csharp
CFeJiggleBone JiggleBone { get; }
```

#### Property Value

- [CFeJiggleBone](/docs/api/shared/schemadefinitions/cfejigglebone)

**JiggleParent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L20)

```csharp
ref uint JiggleParent { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**StrParentBone** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L16)

```csharp
ref CUtlString StrParentBone { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Transform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L18)

```csharp
ref CTransform Transform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

