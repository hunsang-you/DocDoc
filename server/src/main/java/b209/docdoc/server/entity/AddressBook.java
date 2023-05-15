package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import b209.docdoc.server.config.utils.BooleanToYNConverter;
import b209.docdoc.server.member.dto.request.UpdateUserReqDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "addressbook")
@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressBook extends BaseDateTime implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long addressIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_idx")
    private Member member;
    
    @NotNull
    @Column(length = 10)
    private String addressName;

    @NotNull
    @Column(length = 30)
    private String addresEmail;

    @NotNull
    @Column(length = 15)
    private String addressPhone;

    @NotNull
    @Column(length = 20)
    private String addressGroup;

    @Convert(converter = BooleanToYNConverter.class)
    private Boolean addressIsDeleted;

    @Override
    public void prePersist() {
        super.prePersist();
    }
}
