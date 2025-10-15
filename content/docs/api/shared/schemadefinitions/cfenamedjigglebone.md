---
title: CFeNamedJiggleBone
---

```csharp
public interface CFeNamedJiggleBone : ISchemaClass<CFeNamedJiggleBone>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### JiggleBone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L23)

```csharp
CFeJiggleBone JiggleBone { get; }
```

#### Property Value

- [CFeJiggleBone](/docs/api/shared/schemadefinitions/cfejigglebone)

### JiggleParent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L21)

```csharp
ref uint JiggleParent { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### StrParentBone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L17)

```csharp
string StrParentBone { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Transform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L19)

```csharp
ref CTransform Transform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

